import { User } from './user'
import { UserProvider } from './UserContextProvider'

function App() {
	return (
		<UserProvider>
			<User name={'Jeff'} age={33} isMarried={false} />
			<User name={'Colin'} age={36} isMarried={true} />
		</UserProvider>
	)
}

export default App
