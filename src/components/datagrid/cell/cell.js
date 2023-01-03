import { useRecoilState } from "recoil";
import { dataAtom } from "../atoms";
import { VLayout, HLayout, Spacer } from "../../layout";
import "./cell.css";

const toBinary = (n) => n.toString(2).padStart(4, "0");

const Cell = (props) => {
  const [data, setData] = useRecoilState(dataAtom);
  const { row, col, index } = props;

  const flipBit = () => {
    setData(
      data.map((rowData, i) =>
        i !== row
          ? rowData
          : rowData.map((colData, j) => (j === col ? 1 * !colData : colData))
      )
    );
  };

  return (
    <div className="cellFrame">
      <div className="cell" onClick={flipBit}>
        <VLayout>
          <div className="data">{data[row][col]}</div>
          <HLayout>
            <Spacer />
            <div className="idx">{toBinary(index)}</div>
          </HLayout>
        </VLayout>
      </div>
    </div>
  );
};

export default Cell;
