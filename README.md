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

Now update the `types.ts` file and run the test again.

```
echo "type NewType = { stuff: string }" >> types.ts
npm test
```

You should see the test fail as you will need to copy in the new MD5 hash of the file
and with that you should also bump the version number.

## Limitations

In practise, a typical implementation of Redux might have scattered type definitions across multiple files. In this case, the test should be updated to reflect which particular files the Redux reducer depends upon.

Importing a file into your `types.ts` file will cause an initial change in the hash but subsequent changes to that imported file will no longer flag as requiring a version bump! To get around this we again need to explicitly include these dependencies.
