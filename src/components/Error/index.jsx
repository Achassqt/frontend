import QuatreCentQuatre from '../../assets/404.svg'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const ErrorWrapper = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  // background-color: ${colors.background};
  align-items: center;
`

const ErrorTitle = styled.h1`
  font-weight: 300;
`

const ErrorSubTitle = styled.h2`
  font-weight: 300;
  color: ${colors.secondary};
`

const Illustration = styled.img`
  max-width: 800px;
`

function Error() {
  return (
    <ErrorWrapper>
      <ErrorTitle>Oups...</ErrorTitle>
      <Illustration src={QuatreCentQuatre} alt="404" />
      <ErrorSubTitle>Il semblerait qu'il y ait un problème</ErrorSubTitle>
    </ErrorWrapper>
  )
}

export default Error
