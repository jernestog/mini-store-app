import { TailSpin } from 'react-loader-spinner';

const Spinner = () => {
  return (
    <TailSpin
      height={20}
      width={20}
      color={'#202020'}
      ariaLabel="loading"
    />
  )
}

export default Spinner