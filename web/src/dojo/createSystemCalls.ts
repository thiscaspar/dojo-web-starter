import { SetupNetworkResult } from "./setupNetwork";

export type SystemCalls = ReturnType<typeof createSystemCalls>;

export enum Direction {
    Left = 0,
    Right = 1,
    Up = 2,
    Down = 3,
}

export function createSystemCalls(
    { execute, syncWorker }: SetupNetworkResult,
) {
    const spawn = async () => {
        const tx = await execute("spawn", []);
        // await awaitStreamValue(txReduced$, (txHash) => txHash === tx.transaction_hash);
        syncWorker.sync(tx.transaction_hash);
        
    };

    const move = async (direction: Direction) => {
        // execute from core
        const tx = await execute("move", [direction]);
        // awaitStreamValue(txReduced$, (txHash) => txHash === tx.transaction_hash);
        syncWorker.sync(tx.transaction_hash);
        console.log("Moved ", direction)
      };


    return {
        spawn,
        move
    };
}