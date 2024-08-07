// AuthProvider.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../../../firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, setUser);
        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}


// default allowance
/////////////////////////////////////////////////////////////////
// AuthProvider.jsx
// import React, { createContext, useContext, useEffect, useState } from 'react';
// import { auth } from '../../firebase/firebase';
// import { onAuthStateChanged } from 'firebase/auth';

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//     const [user, setUser] = useState(null);

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, setUser);
//         return () => unsubscribe();
//     }, []);

//     return (
//         <AuthContext.Provider value={{ user }}>
//             {children}
//         </AuthContext.Provider>
//     );
// }

// export function useAuth() {
//     return useContext(AuthContext);
// }
