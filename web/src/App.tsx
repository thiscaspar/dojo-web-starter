import './App.css';
import {useDojo} from './DojoContext';
import {useComponentValue} from "@dojoengine/react";
import {Direction} from './dojo/createSystemCalls'
import {Utils} from '@dojoengine/core';

function App() {
    const {
        systemCalls: {spawn, move},
        components: {Moves, Position},
    } = useDojo();


    const entityId = BigInt(import.meta.env.VITE_ENTITY_ID);
    const position = useComponentValue(Position, Utils.getEntityIdFromKeys([entityId]));
    const moves = useComponentValue(Moves, Utils.getEntityIdFromKeys([entityId]));


    return (
        <>
            <div className="card">
                <button onClick={() => spawn()}>Spawn</button>
            </div>
            <div className="card">
                <button onClick={() => move(Direction.Left)}>Move Left</button>
            </div>
            <div className="card">
                <button onClick={() => move(Direction.Right)}>Move Right</button>
            </div>
            <div className="card">
                <button onClick={() => move(Direction.Up)}>Move Up</button>
            </div>
            <div className="card">
                <button onClick={() => move(Direction.Down)}>Move Down</button>
            </div>
            <div className="card">
                <div>Moves Remaining: {moves ? `${moves['remaining']}` : 'Need to Spawn'}</div>
            </div>
            <div className="card">
                <div>Position: {position ? `${position['x']}, ${position['y']}` : 'Need to Spawn'}</div>
            </div>
        </>
    );
}

export default App;
