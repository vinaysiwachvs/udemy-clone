import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

function App() {
	const Layout = () => {
		return (
			<div className='main'>
				<Header />
				<div className='container'>
					<div className='contentContainer'>
						<Outlet />
					</div>
				</div>
			</div>
		);
	};

	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: [
				{
					path: "/",
					element: <Home />,
				},
				{
					path: "search",
					element: <Search />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
