import {useState} from "react";
import styled from "@emotion/styled"
import {Link} from "react-router-dom";

const TreeNode = ({ id, label, href, children, depth = 0, activeId, setActiveId }) => {
  const [expanded, setExpanded] = useState(false);
  const hasChildren = children && children.length > 0;

  const toggle = () => {
    if (hasChildren) setExpanded(!expanded);
    setActiveId(id);
  };

  const onLinkClick = () => {
    setActiveId(id);
  };

  const containsPath = (nodes, path) => {
    for (const node of nodes) {
      if (node.href === path) return true;
      if (node.children && node.children.length > 0) {
        if (containsPath(node.children, path)) return true;
      }
    }
    return false;
  }

  return (
    <div>
      <Item depth={depth} active={id === activeId}>
        <StyledLink to={href} onClick={onLinkClick}>
          {label}
        </StyledLink>
        {hasChildren && (
          <ToggleIcon onClick={toggle}>
            {expanded ? '▾' : '▸'}
          </ToggleIcon>
        )}
      </Item>

      {expanded && hasChildren && (
        <>
          {children.map((child) => (
            <TreeNode
              key={child.id}
              id={child.id}
              href={child.href}
              label={child.label}
              children={child.children}
              depth={depth + 1}
              activeId={activeId}
              setActiveId={setActiveId}
            />
          ))}
        </>
      )}
    </div>
  )
}
export default TreeNode;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .8rem 1.2rem .8rem 0;
  padding-left: ${props => 1.2 + props.depth * 1.6}rem;
  background-color: ${props => (props.active ? '#e6f7ff' : 'transparent')};
  font-weight: ${props => (props.active ? 'bold' : 'normal')};
  cursor: pointer;
  user-select: none;
  transition: background-color 0.2s;
  font-size: 1.6rem;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const StyledLink = styled(Link)`
  flex: 1;
`;

const ToggleIcon = styled.button`
  margin-right: 0.4rem;
  padding: 0.2rem .6rem;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  color: #666;
  border-radius: .4rem;
  transition: background-color 0.2s;
  background-color: transparent;
  &:hover {
    background-color: #ddd;
  }
`;