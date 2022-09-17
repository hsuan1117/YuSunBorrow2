export default function Footer() {
  return (
    <footer className="bg-blue-600">
      <ul className="flex items-center justify-between lg:container px-4 py-6 mx-auto text-sm text-white md:px-6">
        <li>
          Created by{" "}
          <a
            href="https://taylorbryant.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            京備字第 0000000000 號
          </a>
        </li>

        <li>
          <a
            href="https://github.com/oddstronaut/next-starter-tailwind"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  );
}
