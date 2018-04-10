import entityModel from "../entity_model";

const UserModel = {
    ...entityModel,
    currentUser: {
        name: "",
        age: "",
        type: "",
        address: {}
    }
};
