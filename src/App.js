import "./app.css";
import { useState } from "react";

function App() {
    const [clickTracker, setClickTracker] = useState([]);

    const tableClickHandler = (e) => {
        setClickTracker([...clickTracker, e.target.firstChild.data]);
    };

    const undoHandler = () => {
        setClickTracker(clickTracker.slice(0, clickTracker.length - 1));
    };

    // console.log(clickTracker);
    return (
        <div>
            <table style={{ width: "90vw" }}>
                <tbody>
                    <tr>
                        <td key="item1" onClick={tableClickHandler}>
                            item1
                        </td>
                        <td key="item2" onClick={tableClickHandler}>
                            item2
                        </td>
                        <td key="item3" onClick={tableClickHandler}>
                            item3
                        </td>
                        <td key="item4" onClick={tableClickHandler}>
                            item4
                        </td>
                        <td key="item5" onClick={tableClickHandler}>
                            item5
                        </td>
                    </tr>
                </tbody>
            </table>
            <button
                style={{ width: "7em", height: "2em" }}
                onClick={undoHandler}
            >
                UNDO
            </button>
        </div>
    );
}

export default App;
