import Date from "./Date";
import Numbers from "./Numbers";
import Square from "./Square";

function Home() {
    return (
        <>
            <p style={{ textAlign: 'left' }}>
                <Date format="LLLL" />
            </p>

            <h2>ברוכים הבאים!</h2>
            <Numbers min={10} max={50} />
            <Numbers min={30} max={75} />
            <Numbers min={100} max={110} />

            <Square width={400} height={300} bg="blue" />
            <Square width={600} height={200} bg="green" />
            <Square width={800} height={500} bg="yellow" />
        </>
    );
}

export default Home;