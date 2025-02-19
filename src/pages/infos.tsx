import { InfosStats } from "../params";

export default function InfosPage() {
  return (
    <>
      <div className="text-center w-full mx-auto  px-4 sm:px-6 lg:py-10 lg:px-8 z-20">
        <h2 className="text-3xl font-extrabold sm:text-4xl text-white">
          <span className="block">Simon Bertrand</span>
          <span className="color">Ingénieur doctorant en deep learning</span>
        </h2>
        <p className="text-xl my-4 max-w-xl mx-auto text-gray-400">
          <ul>
            <li>Science des données et IA (ML, DL, CV)</li>
            <li>Software Engineering (Web, Logiciels)</li>
          </ul>
        </p>
        <section>
          <div className="container flex justify-around pt-3">
            {InfosStats.map((x) => (
              <div>
                <h5 className="text-5xl font-bold text-white">
                  <span className="inline text-white">{x.value}</span>
                  <span className="color">+</span>
                </h5>
                <p className="text-xs font-medium tracking-wide text-indigo-100 uppercase">
                  {x.name}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="max-w-screen-xl p-3 mx-auto">
        <h2 className="mb-8 text-3xl font-extrabold border-b-4">
          Domaines techniques
        </h2>

        <div className="grid grid-cols-2 text-center items-center gap-8">
          <div className="p-4 overflow-hidden bg-color2 shadow-lg rounded-2xl">
            <div className="w-full">
              <p className="mb-2 text-md lg:text-lg font-medium text-white">
                IA / Machine Learning
              </p>
              <p className="text-xs text-gray-400">
                TensorFlow, Keras, PyTorch, Jax, Sci-kit Learn, Ray
              </p>
            </div>
          </div>
          <div className="p-4 overflow-hidden bg-color2 shadow-lg rounded-2xl">
            <div className="w-full">
              <p className="mb-2 text-md lg:text-lg font-medium text-white">
                Traitement du signal et des images
              </p>
              <p className="text-xs text-gray-400">
                OpenCV, SciPy, Numpy, Pandas, Statsmodels, MATLAB, Google Earth
                Engine
              </p>
            </div>
          </div>
          <div className="p-4 overflow-hidden bg-color2 shadow-lg rounded-2xl">
            <div className="w-full">
              <p className="mb-2 text-md lg:text-lg font-medium text-white">
                Data Engineering
              </p>
              <p className="text-xs text-gray-400">
                SQL, No-SQL, Redis Cache, T-SQL, PL/pgSQL, PySpark, ORM, ETL.
                <br />
                <p className="text-[10px] italic">
                  {" "}
                  Bonne maîtrise de PostgreSQL et de ces fonctionnalités
                  avancées : notify/listen, procédures stockées, triggers,
                  extension TimescaleDB...
                </p>
              </p>
            </div>
          </div>

          <div className="p-4 overflow-hidden bg-color2 shadow-lg rounded-2xl">
            <div className="w-full">
              <p className="mb-2 text-md lg:text-lg font-medium text-white">
                Développement web
              </p>
              <p className="text-xs text-gray-400">
                HTML, CSS, JavaScript, C# (ASP .NET), Node.js, TypeScript,
                ReactJS, Next.js, Tailwind CSS, Bootstrap
              </p>
            </div>
          </div>
          <div className="p-4 overflow-hidden bg-color2 shadow-lg rounded-2xl">
            <div className="w-full">
              <p className="mb-2 text-md lg:text-lg font-medium text-white">
                Programmation bas niveau
              </p>
              <p className="text-xs text-gray-400">Rust, C/C++</p>
            </div>
          </div>
          <div className="p-4 overflow-hidden bg-color2 shadow-lg rounded-2xl">
            <div className="w-full">
              <p className="mb-2 text-md lg:text-lg font-medium text-white">
                Réseau et administration système
              </p>
              <p className="text-xs text-gray-400">
                Ubuntu Server, serveurs web (protocole HTTP, WS, ...), Docker,
                CI/CD, IP, Proxy, DNS, NAT, SSL, Port Forwarding, ... <br />
                <p className="text-[10px] italic">
                  Utilisation de supercalculateurs (HPC) pour le calcul intensif
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
