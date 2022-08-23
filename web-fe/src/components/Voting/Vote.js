import Header from "./Header/Header";
import styled from "styled-components";
import homeImg from "../../assets/testVoteHomeImg.webp";
import Poll from "./Poll/Poll";
import ProfileCard from "./ProfileCard";

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
            <SubTitle>Latest Executive</SubTitle>
            <SubTitle>View more<Arrow /></SubTitle>
          </SBRContainer>
          <Poll />
        </SubContainer>

        <SubContainer>
          <SBRContainer>
            <SubTitle>Active Polls</SubTitle>
            <SubTitle>View all<Arrow /></SubTitle>

          </SBRContainer>
          <Poll />
          <Poll />
          <Poll />
          <Poll />
        </SubContainer>

        <SBCContainer>
          <SBRContainer>
            <div>Meet the Member</div>
            <div>View all<Arrow /></div>
          </SBRContainer>

          <RowScrollContainer>
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
          </RowScrollContainer>
        </SBCContainer>
        
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

const SubTitle = styled.div`
  margin: 0 3em 0 3em;
`

const SBRContainer = styled(RowContainer)`
  width: 100%;
  justify-content: space-between;
`
const RowScrollContainer = styled.div`
  width: 1000px;
  height: 190px;
  overflow: auto;
  overflow-y: hidden;
  margin: 0 auto;
  white-space: nowrap
`

const SBCContainer = styled(ColContainer)`
  width: 1hw;
  height: 200px;
  padding: 20px;
  // overflow: auto;
`

const MainContainer = styled(ColContainer)`  
  // background-image: url(${homeImg});
  // background-size: cover;
  overflow: visible;
`

const SubContainer = styled(ColContainer)`
  // background-color: rgba(20, 20, 100, 0.26);
  max-width: 50rem;
  width: 90%;
  margin: 1.5rem auto;
  border-radius: 20px;
  padding: 1rem;
`

const CardContainer = styled.div`
  background-color: rgba(20, 20, 100, 0.26);
  width: 400px;
  // min-height: 15rem;
  // margin: 1rem;
  // overflow-x: auto;
`
const Arrow = styled.div`
  content: '';
  display:inline-block;
  width: 0.5rem;
  height: 0.5rem;
  margin-left: 0.5rem;
  border-top: 0.1rem solid #333;
  border-right: 0.1rem solid #333;
  transform: rotate(45deg);
`





export default Vote;