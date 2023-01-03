import { useRecoilValue } from "recoil";
import { HLayout, VLayout, Spacer } from "../layout";
import Cell from "./cell";
import Container from "./container";
import "./datagrid.css";
import { dataAtom } from "./atoms";

const DataGrid = (props) => {
  const data = useRecoilValue(dataAtom);
  return (
    <VLayout>
      <HLayout>
        <Container>
          <VLayout>
            {data.map((row, r) => (
              <HLayout key={r}>
                {row.map((col, c) => (
                  <Cell key={c} row={r} col={c} index={r * 4 + c} />
                ))}
                <Spacer />
              </HLayout>
            ))}
            <Spacer />
          </VLayout>
        </Container>
        <Spacer />
      </HLayout>
      <Spacer />
    </VLayout>
  );
};

export default DataGrid;
