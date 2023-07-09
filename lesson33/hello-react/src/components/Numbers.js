function Numbers(props) {
    let numbers = [];

    const min = props.min || 0;
    const max = props.max || 0;

    for (let i = min; i <= max; i++) {
        numbers.push(i);
    }

    return <p>{numbers.join(', ')}</p>;
}

export default Numbers;