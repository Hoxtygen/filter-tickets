import { isArrayEmpty, filterTickets } from "./"
import ticketData from "../data/ticketData.json"


describe("Utility functions", () => {
	describe('isArrayEmtpy', () => {
		it("should return true if array is empty", () => {
			const testArray: string[] = []
			const isEmpty = isArrayEmpty(testArray)
			expect(isEmpty).toBe(true)
		})
		it("should return false for non-empty array", () => {
			const testArray: string[] = ["harry", "Megan"]
			const isEmpty = isArrayEmpty(testArray)
			expect(isEmpty).toBe(false)
		})
	})
	

	describe('filterTickets function', () => {
		it("should return all arrays", () => {
			const filteredArray = filterTickets(ticketData, [])
			expect(filteredArray.length).toEqual(50)
		})

		it("should return all arrays when all is chosen", () => {
			const testData = ["all"]
			const filteredArray = filterTickets(ticketData, testData)
			expect(filteredArray.length).toEqual(50)
		})

		it("should return non-empty arrays", () => {
			const testData = ["3"]
			const filteredArray = filterTickets(ticketData, testData)
			expect(filteredArray.length).toEqual(10)
		})

	})
})