import Child from './Child';

function Parent() {
  return (
    <>
      <Child name="Ryan" text="18" />
      {/* <Child text={123} name={true} /> */}
      <Child />
    </>
  );
}

export default Parent;
