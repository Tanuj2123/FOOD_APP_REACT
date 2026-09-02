import Sum from "../Sum"


test("this should return sum of two numbers",()=>{
    const res = Sum(3,4);

    expect(res).toBe(7);
})