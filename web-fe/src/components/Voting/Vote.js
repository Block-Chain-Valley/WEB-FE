import Header from "./Header/Header";
import styled from "styled-components";
import homeImg from "../../assets/testVoteHomeImg.webp";

const Vote = () => {
  return (
    <div>
      <Header></Header>
      <MainContainer>
        <SubContainer>    
            <div>BlockchainValley Governance Voting</div>
            <div>블록체인밸리 내의 안건들에 대해 투표하기 위한 DAO 프로토콜 입니다</div>
        </SubContainer>

        <SubContainer>
          <SBRContainer>
            <div>Latest Executive</div>
            <div>View more</div>
          </SBRContainer>
          <CardContainer>dksrjs</CardContainer>
        </SubContainer>

        <SubContainer>활성화되어 있는 안건들

        </SubContainer>

        <SubContainer>블록체인 노드의 프로필 및 정보

        </SubContainer>

        <footer>footer</footer>
      </MainContainer>
      
    </div>
  )
};

const ColContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

const RowContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`

const SBRContainer = styled(RowContainer)`
  width: 100%;
  justify-content: space-between;
`

const MainContainer = styled(ColContainer)`  
  // background-image: url(${homeImg});
  // background-size: cover;
  overflow: visible;
`

const SubContainer = styled(ColContainer)`
  background-color: rgba(20, 20, 100, 0.26);
  max-width: 50rem;
  width: 90%;
  margin: 1.5rem auto;
  border-radius: 20px;
  padding: 1rem;
`

const CardContainer = styled.div`
background-color: rgba(20, 20, 100, 0.26);
  width: 100%;
  min-height: 15rem;
`






export default Vote;