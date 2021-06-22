import {
    useIndex,
    IndexSearch,
    IndexTable,
    IndexPagination,
} from '@macramejs/macrame-react';

function Index(props) {
    const table = useIndex(props);

    return (
        <div>
            <IndexSearch {...props} table={table} />
        </div>
    );
}

export default Index;
