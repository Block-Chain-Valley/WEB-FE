import styled from "styled-components";

const ProfileCard = () => {

  return (
    <ColContainer>
      <SBRContainer>
        <div>Img</div>
        <div>
          <div>name name</div>
          <div>0xaa19f...9902</div>
        </div>
        <div>View Profile Details</div>
      </SBRContainer>
      
      <div>Participation Breakdown</div>

      <SBRContainer>
        <div>
          <div>95.24%</div>
          <div>Poll Participation</div>
        </div>
        <div>
          <div>100%</div>
          <div>Executive Participation</div>
        </div>
      </SBRContainer>
    </ColContainer>
  )
};

const ColContainer = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  justify-content: center;
  width: 400px;
  height: 200px;
  background-color: lightgray;
  margin: 10px;

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



export default ProfileCard;

