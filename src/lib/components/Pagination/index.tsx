import { Box, Button, Flex } from "@chakra-ui/react";
import { PaginationProps } from "~/lib/utilities/schema";

const Pagination = ({rockets = [], currentPage, setCurrentPage, itemsPerPage, indexOfLastItem}: PaginationProps) => {
   
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <Box mb='16'>
            <Flex alignItems='center' gap='8px' justifyContent='center'>
                <Button borderRadius='8px' onClick={() => paginate(currentPage - 1)} isDisabled={currentPage === 1}>
                    Previous
                </Button>
                    {rockets?.length > 0 &&
                        Array.from({ length: Math.ceil(rockets?.length / itemsPerPage) }, (_, i) => (
                            <button key={i} onClick={() => paginate(i + 1)}>
                                {i + 1}
                            </button>
                        ))}
                <Button borderRadius='8px' onClick={() => paginate(currentPage + 1)} isDisabled={indexOfLastItem >= rockets.length}>
                    Next
                </Button>
            </Flex>
        </Box>
    );
};

export default Pagination;
