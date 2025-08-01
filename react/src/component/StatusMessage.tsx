/* 조건부 렌더링 */
export default function StatusMessage({ status }: { status: string }) {
  // loading, success, error, default

  switch (status) {
    case 'loading':
      return <h1>Loading..</h1>;
    case 'success':
      return <h1>Data loaded successfully!</h1>;
    case 'error':
      return <h1>Error fetching data!</h1>;
    default:
      return <h1>unknown status</h1>;
  }

  // if (status === 'loading') return <h1>Loading..</h1>;
  // if (status === 'success') return <h1>Data loaded successfully!</h1>;
  // if (status === 'error') return <h1>Error fetching data!</h1>;
  // else return <h1>unknown status</h1>;
}
