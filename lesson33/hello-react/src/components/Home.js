import Numbers from "./Numbers";
import Square from "./Square";

function Home() {
    return (
        <>
            <h2>ברוכים הבאים!</h2>
            <Numbers min={10} max={50} />
            <Numbers min={30} max={75} />
            <Numbers min={100} max={110} />

            <Square width={40} height={30} bg="blue" />
            <Square width={60} height={20} bg="green" />
            <Square width={80} height={50} bg="yellow" />
        </>
    );
}

export default Home;