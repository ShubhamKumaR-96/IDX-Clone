import { useTestPing } from "../../hooks/apis/queries/useTestPing";

const TestPingComponent = () => {
  const { isLoading, data } = useTestPing();

  if (isLoading) {
    return <>Loading....</>;
  }

  return <div>Hello {data?.msg}</div>;
};

export default TestPingComponent;
