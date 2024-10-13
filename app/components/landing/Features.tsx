"use client";

import "@/app/styles/animations.css";

export const Features: React.FC = () => {
  return (
    <section>
      <span>Future</span>
      <h2>Write, without the hassle</h2>
      <ul>
        <li>
          <div>
            <div>{/* img */}</div>

            <div>
              <span>1</span>
            </div>
            <div>
              <h3>Sing up</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis, totam commodi odi
              </p>
            </div>
          </div>
        </li>
        <li>
          <div>
            <div>
              <h3>Sing up</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis, totam commodi odi
              </p>
            </div>
            <div>
              <span>2</span>
            </div>
            <div>{/* img */}</div>
          </div>
        </li>
        <li>
          <div>
            <div>{/* img */}</div>

            <div>
              <span>3</span>
            </div>
            <div>
              <h3>Sing up</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis, totam commodi odi
              </p>
            </div>
          </div>
        </li>
        <li>
          <div>
            <span>4</span>
          </div>
        </li>
      </ul>
    </section>
  );
};
