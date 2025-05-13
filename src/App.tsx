import { User, Countries } from './user'
import { UserProvider } from './UserContextProvider'

function App() {
	return (
		<UserProvider>
			<User name={'Jeff'} age={33} isMarried={false} country={Countries.USA} />
			<User
				name={'Colin'}
				age={36}
				isMarried={true}
				country={Countries.Canada}
			/>
		</UserProvider>
	)
}

export default App
