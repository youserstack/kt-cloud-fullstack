import * as D from "../data";

const Demo = () => {
  const children = D.makeArray(10).map((_, i) => (
    <div key={i} style={{ border: "1px solid" }}>
      <p>{D.randomId()}</p>
      <p>{D.randomName()}</p>
      <p>{D.randomJobTitle()}</p>
      <p>{D.randomSentence()}</p>
      <img src={D.randomAvatar()} alt="" width={100} height={100} />
    </div>
  ));

  return (
    <div>
      {/* <h1>demo</h1>
      <p>
        {D.randomName()}, {D.randomEmail()}
      </p>
      <img src={D.randomImage()} alt="" width={100} height={100} /> */}

      {/* 배열 엘리먼트 */}
      {/* <div style={{ display: "flex", flexWrap: "wrap" }}>{children}</div> */}

      {/* 이벤트 연습 */}
    </div>
  );
};

export default Demo;
