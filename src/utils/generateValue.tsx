import React from "react";

export function generateValue({
  data,
  prop,
}: {
  data: object;
  prop: string[];
}): React.ReactNode {
  return (
    <>
      {Array.from({ length: 20 }).map((_, i) => {
        // cara 1
        // const prop1 = prop[0] && prop[0] + String(i + 1);
        // const prop2 = prop[1] && prop[1] + String(i + 1);
        // const val1 = data[prop1 as keyof typeof data];
        // const val2 = data[prop2 as keyof typeof data];
        // if (val1 && val2) {
        //   return (
        //     <p key={i}>
        //       {i + 1}. {val1} {val2}
        //     </p>
        //   );
        // }

        // cara 2
        // return (
        //   <p key={Math.random()}>
        //     {prop.map((props, index) => {
        //       if (
        //         data[(props + String(i + 1)) as keyof typeof data] !== "" ||
        //         data[(props + String(i + 1)) as keyof typeof data] !== " "
        //       ) {
        //         return (
        //           <span key={index}>
        //             - {data[(props + String(i + 1)) as keyof typeof data]}
        //           </span>
        //         );
        //       }
        //     })}
        //   </p>
        // );

        // cara 3 paling efektif dan 100% work no bug
        const newArray = [] as string[];
        Array.from({ length: prop.length }).map((_, j) => {
          const newProp = prop[j] + String(i + 1);
          const value = data[newProp as keyof typeof data];
          if (value !== " ") newArray.push(value);
        });
        // console.log(newArray);
        if (newArray[0])
          return (
            <li key={i}>
              {Array.from({ length: newArray.length }).map(
                (_, k) => (
                  <span key={Math.random()}>{newArray[k]} </span>
                )
              )}
            </li>
          );

        // cara 4
        // prop.forEach((props, index) => {
        //   const newProp = props + String(i + 1);
        //   console.log(newProp, "newProp");
        //   const value = data[newProp as keyof typeof data];
        //   if (value) {
        //     console.log("adda")
        //     return (
        //       <p>
        //         tessss
        //       </p>
        //     );
        //   }
        //   return <p>tess</p>;
        // })
      })}
    </>
  );
}
