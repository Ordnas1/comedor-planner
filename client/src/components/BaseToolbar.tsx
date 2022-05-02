import styled from "styled-components";
import { Toolbar, ToolbarProps } from "@mui/material";

const BaseToolbar = styled(Toolbar)<ToolbarProps>(() => ({ height: 140 }));

export default BaseToolbar;
