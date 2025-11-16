import Image from "next/image";
import Link from "next/link";
import { DEMOS } from "@/lib/config";

export default function Home() {
  return (
    <main>
      <div>
        <h2>Welcome to Shiri's website</h2>
        <p>
          Feel free to look around, play tic-tac-toe, see some wonderful art pieces and Maya's creative design
        </p>
        <Image
          src="/huji.svg"
          alt="HUJI Logo"
          width="80"
          height="80"
          priority
        />
        <Image
          src="/bezalel.svg"
          alt="Bezalel Logo"
          className="item"
          width="80"
          height="80"
          priority
        />
        <div>
          {DEMOS.map((demo) => (
            <div key={demo.slug} className="demo-item">
              <h2>{demo.title}</h2>
              <p>{demo.description}</p>
              <Link className="button" href={demo.slug}>
                See it →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
