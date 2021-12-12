import styled from "styled-components";


interface CheckboxProps {
    checked: boolean
}

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export const HiddenCheckbox = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`

export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  background: ${(props: CheckboxProps) => props.checked ? 'var(--light-blue)' : 'white'};
  border: 1px solid var(--dark-blue);
  border-radius: 50%;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 1px var(--dark-blue);
  }

  ${Icon} {
    visibility: ${(props: CheckboxProps) => props.checked ? 'visible' : 'hidden'}
  }
`;
