import WithHoc from './WithHoc'

const Comp = (text: string) => {
  return (
    <div>{text}</div>
  )
}

export default WithHoc(Comp)