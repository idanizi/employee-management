import EmployeeApi from "./EmployeeApi";

it('should return idan on search', async () => {
    expect(await EmployeeApi.find({username: 'idan'})).toHaveLength(1);
})

it('should find one', async () => {
    expect(await EmployeeApi.findOne({username: 'idan'})).not.toBeNull();
})