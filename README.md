# redux-persist-typed
An example of how one might approach enforcing version bumps when your Redux store changes its type signature ✅

## How to use

To understand what this demo is attempting, clone the repo, install the dependencies and run the test:

```
git clone git@github.com:Desarol/redux-persist-typed.git
npm i
npm test
```

You should see that the test passes and says it will check the version number is bumped every time the type for the RootReducer is changed.
Now update the `types.ts` file and run the test again. You should see the test fail as you will need to copy in the new MD5 hash of the file
and with that you should also bump the version number.
