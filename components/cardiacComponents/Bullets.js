import React from "react";

function Bullets({
  data,
  desc,
  footerdata,
  head,
  footerTitle,
  ulClass,
  boxClass,
  divClass,
}) {
  return (
    <div className={`${divClass ? divClass : "py-4 space-y-6"}`}>
      {data?.map((data, index) => (
        <div
          className={`border border-[#D84498] rounded-lg shadow-lg p-8 ${
            boxClass ? boxClass : "flex flex-col"
          }`}
          key={index}
        >
          {data && <h2 className="text-lg font-medium mb-4 text-hciPrimary">{data.heading}</h2>}
          {desc && (
            <p
              className="font-light mb-4"
              dangerouslySetInnerHTML={{ __html: desc }}
            />
          )}
          {data.description && (
            <p
              className="font-light mb-4"
              dangerouslySetInnerHTML={{
                __html: data.description ? data.description : "",
              }}
            />
          )}
          {head && (
            <p
              className="font-medium pb-2"
              dangerouslySetInnerHTML={{ __html: head }}
            />
          )}
          <ul
            className={`space-y-4 ${
              ulClass ? ulClass : "list-disc list-outside"
            } text-hciSecondary`}
          >
            {data.aneurysmSymptoms?.map((symptom, index) => (
              <li key={index} className="font-light">
                <p className="text-black font-light">
                  <strong className="text-hciSecondary">{symptom.title}</strong>
                  {symptom.title && ""}{" "}
                  <span
                    dangerouslySetInnerHTML={{
                      __html: symptom.description ? symptom.description : "",
                    }}
                  ></span>
                </p>
              </li>
            ))}
          </ul>
          <div className="py-4">
            {footerTitle && <p className="font-semibold">{footerTitle}</p>}
            <p className="font-light">{footerdata}</p>
            {data.footer && (
              <p
                className="font-light mb-4"
                dangerouslySetInnerHTML={{
                  __html: data.footer ? data.footer : "",
                }}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Bullets;
