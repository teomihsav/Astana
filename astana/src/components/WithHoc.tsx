
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const WithHoc = (WrappedComponent: React.FC<any>) => {
  return (
    <div><WrappedComponent text="withHoc" /></div>
  )
}

export default WithHoc