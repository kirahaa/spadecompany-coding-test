import styled from "@emotion/styled";

const ToggleSwitch = ({ checked, onChange, label }) => {
  return (
    <Wrapper>
      <ToggleContainer>
        <ToggleInput type="checkbox" checked={checked} onChange={onChange} />
        <Slider checked={checked} />
      </ToggleContainer>
      <Label>{label}</Label>
    </Wrapper>
  )
};
export default ToggleSwitch;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ToggleContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 4rem;
  height: 2rem;
`;

const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: ${props => props.checked ? "#91deff" : "#ccc"};
  transition: 0.4s;
  border-radius: 3.2rem;

  &::before {
    position: absolute;
    content: "";
    height: 1.4rem;
    width: 1.4rem;
    left: .3rem;
    bottom: .3rem;
    background-color: #fff;
    transition: 0.4s;
    border-radius: 50%;
    transform: ${props => props.checked ? 'translateX(2rem)' : 'translateX(0)'};
  }
`;

const Label = styled.span`
  margin-left: 0.5rem;
  font-size: 1.5rem;
  vertical-align: middle;
`;