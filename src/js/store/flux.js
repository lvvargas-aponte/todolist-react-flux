const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			title: 'Todos',
			url: 'https://playground.4geeks.com/apis/fake/todos/user/lvvargas-aponte',
			todolist: [],
			inputValue: '',
			id: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			getTodos: async () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				const store = getStore(store);
				try {
					const resp = await fetch(store.url);
					if (!resp.ok) {
						throw new Error("Network response was not ok");
					}
					const data = await resp.json();
					setStore({
						todolist: [...store.todolist, ...data],
						id: [...store.id, ...data.map(todo => todo.id)]
					});
				} catch (error) {
					console.error(`There was a problem with the fetch operation: ${error}`);
				}
			},
			getId: () => {
				const store = getStore(store);
				return store.id[store.id.length - 1] + 1;
			},
			updateTodos: async (updatedFetchTodos) => {
				const store = getStore(store)
				try {
					const resp = await fetch(store.url, {
						method: "PUT",
						body: JSON.stringify(updatedFetchTodos),
						headers: {
							"Content-Type": "application/json"
						}
					});
					if (!resp.ok) {
						throw new Error("Network response was not ok");
					}
					console.log(await resp.json());
				} catch (error) {
					console.error(`There was a problem with the fetch operation: ${error}`);
				};
			},
			handleInputChange: (e) => {
				setStore({ inputValue: e.target.value });
			},
			onInputChange: () => {
				setStore({ inputValue: '' })
			},
			handleInputKeyDown: (e) => {
				const store = getStore(store);
				const actions = getActions(actions);
				if (e.key === 'Enter' && store.inputValue.trim() != '') {
					const newTodo = { label: store.inputValue, done: false, id: actions.getId() };
					const updatedFetchTodos = [...store.todolist, newTodo];
					setStore({ todolist: updatedFetchTodos });
					actions.onInputChange('');
					actions.updateTodos(updatedFetchTodos);
				}
			},
			deleteTodo: async (index) => {
				const store = getStore(store);
				const actions = getActions(actions);
				const removedFetchTodos = store.todolist.filter((_, fetchTodoIndex) => fetchTodoIndex != index)
				setStore({ todolist: removedFetchTodos });
				try {
					const resp = await fetch(store.url, {
						method: "PUT",
						body: JSON.stringify(removedFetchTodos),
						headers: {
							"Content-Type": "application/json"
						}
					});
					if (!resp.ok) {
						throw new Error("Network response was not ok");
					}
					console.log(await resp.json());
				} catch (error) {
					console.error(`There was a problem with the fetch operation: ${error}`);
				};
			}
		}
	};
};

export default getState;
