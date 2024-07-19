import React from 'react';
import IconLink from "./IconLink";
import { Box } from "@mui/material";

function PortfolioBlock(props) {
    const { image, summary, live, source, title } = props;
    return (
        <Box 
            display={'flex'} 
            flexDirection={'column'} 
            justifyContent={'space-between'} 
            alignItems={'center'} 
            height={'100%'} 
            p={2} 
            border={'1px solid #ddd'} 
            borderRadius={'8px'}
        >
            <Box component={'img'} src={image} alt={'mockup'} style={{width: '100%', maxWidth: '500px'}} />
            <h1 style={{ fontSize: '1.5rem', textAlign: 'center', margin: '1rem 0' }}>{title}</h1>
            <Box flexGrow={1} display={'flex'} flexDirection={'column'} justifyContent={'center'}>
                <p style={{ fontSize: '1rem', textAlign: 'justify', padding: '0 1rem', maxWidth: '600px', lineHeight: '1.5rem' }}>{summary}</p>
            </Box>
            <Box display={'flex'} justifyContent={'center'} gap={'1rem'} mt={2}>
                {live && (
                    <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
                        <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'} />
                    </Box>
                )}
                {source && (
                    <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
                        <IconLink link={source} title={'Source Code'} icon={'fa fa-code'} />
                    </Box>
                )}
            </Box>
        </Box>
    );
}

export default PortfolioBlock;
