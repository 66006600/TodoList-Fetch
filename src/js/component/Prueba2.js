

addTask = async (task) => {
    try {
        const response = await fetch('https://assets.breatheco.de/apis/fake/todos/user/66006600', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        });
        const data = await response.json();
        this.setState(prevState => ({
            tasks: [...prevState.tasks, data]
        }));
    } catch (error) {
        console.log(error);
    }
}

deleteTask = async (id) => {
    try {
        await fetch(`https://assets.breatheco.de/apis/fake/todos/user/66006600 ${id}`, {
            method: 'DELETE'
        });
        this.setState(prevState => ({
            tasks: prevState.tasks.filter(task => task.id !== id)
        }));
    } catch (error) {
        console.log(error);
    }
}