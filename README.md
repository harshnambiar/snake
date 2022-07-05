# hello

Welcome to the IC deployed version of the popular game Snake. This is just a fun project with no commercial intent or claim. Feel free to use it for your practice of deploying a game on the Internet Computer. 

Note: The non-IC version JS code is owned by Kamau-ke which can be checked out here:

- [Original Source](https://github.com/Kamau-ke/How-to-buid-snake-game-with-javaScript)



If you want to start working on your project right away, you might want to try the following commands:

```bash
cd snake/
```

## Running the project locally

If you want to test your project locally, you can use the following commands:

```bash
# Starts the replica, running in the background
dfx start --background

# Deploys your canisters to the replica and generates your candid interface
dfx deploy 
```

Once the job completes, your application will be available at `http://localhost:8000?canisterId={asset_canister_id}`.

Additionally, if you are making frontend changes, you can start a development server with

```bash
npm start
```

Which will start a server at `http://localhost:8080`, proxying API requests to the replica at port 8000.

