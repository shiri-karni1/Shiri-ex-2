import styles from "./page.module.css";


interface DepartmentData {
    departmentId: number;
    displayName: string;
}

interface ArtObject {
    objectID: number;
    title: string;
    artistDisplayName: string;
    primaryImageSmall: string | null;
    objectDate: string;
    artistRole: string;
    medium: string;
}


// ----------------------------------------------------
// constants -  Determines the chosen department and number of items
// ----------------------------------------------------

const DEPARTMENT_ID = "15";
const ITEM_COUNT = 60; 

// ----------------------------------------------------
// getArtData - function to fetch art data
// ----------------------------------------------------

async function getArtData(departmentId: string, count: number): Promise<{ departmentName: string, artItems: ArtObject[] }> {
  let objectsResponse: Response;
  const objectsEndpoint = `https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=${departmentId}`;
  
  try {
    objectsResponse = await fetch(objectsEndpoint);
  } catch (error) {
    throw new Error("Cannot connect to the Met Museum API. Please check your internet connection.");
  }
  
  if (!objectsResponse.ok) {
    throw new Error(`HTTP error ${objectsResponse.status} failed to fetch data, make sure that ${departmentId} is the correct department ID.`);
  }

  const data = await objectsResponse.json();
  const allObjectIDs: number[] = data.objectIDs || [];

  if (allObjectIDs.length === 0) {
    throw new Error(`No items in department ${departmentId}. Make sure that (${departmentId}) is the correct department ID.`);
  }

  // choosing random IDs
  const shuffledIDs = allObjectIDs.sort(() => 0.5 - Math.random());
  const randomObjectIDs = shuffledIDs.slice(0, count);

  // finding department name
  const departmentsResponse = await fetch("https://collectionapi.metmuseum.org/public/collection/v1/departments");
  const departmentsData = await departmentsResponse.json();
  const departmentInfo: DepartmentData | undefined = departmentsData.departments.find((d: DepartmentData) => d.departmentId.toString() === departmentId);
  const departmentName = departmentInfo?.displayName || `department no. ${departmentId}`;


  // fetching details for each selected art item
  const fetchPromises = randomObjectIDs.map(async (id) => {
    try {
        const itemResponse = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`);
        if (!itemResponse.ok) {
            console.error(`Failed to fetch item ${id}: HTTP ${itemResponse.status}`);
            return null;
        }
        const obj = await itemResponse.json();
        return {
            objectID: obj.objectID,
            title: obj.title || "Unknown Title",
            artistDisplayName: obj.artistDisplayName || "Unknown Artist",
            primaryImageSmall: obj.primaryImageSmall,
            objectDate: obj.objectDate || "Unknown Date",
            artistRole: obj.artistRole || "Unknown Role",
            medium: obj.medium || "Unknown Medium",
        } as ArtObject;
    } catch (e) {
        console.error(`Network error fetching item ${id}`);
        return null;
    }
  });

  const artItems = (await Promise.all(fetchPromises)).filter((item): item is ArtObject => item !== null);

  return { departmentName, artItems };
}

// ----------------------------------------------------
// Return component for a single art item
// ----------------------------------------------------

function ArtItem({ item }: { item: ArtObject }) {
  return (
    <div className={styles.artCard}>
      <div className = {styles.title}> 
        <h3>{item.title}</h3>
      </div>
      <div className={styles.container}>
        <div className = {styles.imageHolder}>
          {item.primaryImageSmall ? (
          <img src={item.primaryImageSmall} alt={item.title} className={styles.image} />
          ) : (
            <div className={styles.placeholder}>No Available Image</div>
          )}
        </div>
        <div className={styles.details}>
          <p><strong>Artist:</strong> {item.artistDisplayName}</p>
          <p><strong>Date:</strong> {item.objectDate}</p>
          <p><strong>Artist Role:</strong> {item.artistRole}</p>
          <p><strong>Medium:</strong> {item.medium}</p>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------
// Return main ArtPage component
// ----------------------------------------------------

export default async function ArtPage() {
  const { departmentName, artItems } = await getArtData(DEPARTMENT_ID, ITEM_COUNT);
    
  if (artItems.length === 0) {
    throw new Error("There weren't any available pieces to show.");
   }
    
  return (
    <main className={styles.main}>
      <h1>The Department of {departmentName}</h1>
      <div className={styles.grid}>
        {artItems.map(art => (
          <ArtItem key={art.objectID} item={art} />
        ))}
      </div>
    </main>
  );
}
