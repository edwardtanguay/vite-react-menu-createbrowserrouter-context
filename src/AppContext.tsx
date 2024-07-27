import { createContext, useState } from "react";

interface IAppContext {
	siteTitle: string
}

interface IAppProvider {
	children: React.ReactNode;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const [siteTitle] = useState("Info Site 888");

	return (
		<AppContext.Provider
			value={{
				siteTitle
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
