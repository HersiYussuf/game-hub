// // DopplerContext.tsx
// import { createContext, useContext, ReactNode } from 'react';

// interface DopplerContextProps {
//     config: {
//         RAWG_API_KEY: string;
//         // Add other configuration properties as needed
//     };
// }

// const DopplerContext = createContext<DopplerContextProps | undefined>(undefined);

// export const DopplerProvider: React.FC<{ children: ReactNode; config: DopplerContextProps }> = ({ children, config }) => {
//     return <DopplerContext.Provider value={ config }> { children } < /DopplerContext.Provider>;
// };

// export const useDoppler = () => {
//     const context = useContext(DopplerContext);
//     if (!context) {
//         throw new Error('useDoppler must be used within a DopplerProvider');
//     }
//     return context;
// };
