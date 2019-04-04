import EmployeeApi from "./EmployeeApi";
import EmployeeAPI from "./EmployeeApi";

describe('Employee API', () => {

    it('should return idan on search', async () => {
        expect(await EmployeeApi.find({ username: 'idan' })).toHaveLength(1);
    })

    it('should find one', async () => {
        expect(await EmployeeApi.findOne({ username: 'idan' })).not.toBeNull();
    })

    it('should find one of many by id', async () => {
        const _id = "idString12345";
        const act = await EmployeeApi.find({ _id });
        expect(act).toHaveLength(1);
        expect(act[0]).toHaveProperty('_id', _id);
    })

    it('should find one by id', async () => {
        const _id = "idString12345";
        const act = await EmployeeApi.findOne({ _id });
        expect(act).toHaveProperty('_id', _id);
    })

    it('should update one', async () => {
        const _id = "idString12345";

        const data = {
            status: "WORKING",
        }

        await EmployeeApi.updateOne(_id, data);
        const act = await EmployeeApi.findOne({ _id })

        expect(act).toHaveProperty('status', data.status);
    })

    it('should find all 3', async () => {
        const act = await EmployeeAPI.find({});
        expect(act).toHaveLength(3);
    })
    
    it('should create one', async () => {
        const emp = {
            _id: 'idString12345568',
            username: 'newEmp@test.com',
            displayName: 'newEmp',
            status: 'BUSINESS_TRIP'
        }

        await EmployeeAPI.create(emp);
        const act = await EmployeeAPI.findOne(emp);

        expect(act).toBe(emp);
    })

    it('should create one w/o id and generate it', async () => {
        const emp = {
            username: 'newEmp2@test.com',
            displayName: 'newEmp2',
            status: 'BUSINESS_TRIP'
        }

        await EmployeeAPI.create(emp);
        const act = await EmployeeAPI.findOne(emp);

        Object.keys(emp).forEach(key => expect(act).toHaveProperty(key, emp[key]));
        expect(act).toHaveProperty('_id');
    })

    
});