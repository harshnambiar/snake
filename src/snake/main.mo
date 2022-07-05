import Principal "mo:base/Principal";
actor {
    public shared({caller}) func greet(name : Text) : async Text {
        return "Hello, " # name # " of principal: " # Principal.toText(caller) #"!";
    };
};
