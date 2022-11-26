import { MinimalButton, Modal, PrimaryButton } from '@react-pdf-viewer/core';
import * as React from 'react';

const ConfirmationModal = ({ store }) => {
    const [target, setTarget] = React.useState('');

    const handleTargetClicked = (clickedTarget) => {
        setTarget(clickedTarget);
    };

    const handleCancel = () => {
        setTarget('');
    };

    const handleConfirm = () => {
        setTarget('');
        window.open(target, '_blank');
    };

    const renderContent = () => (
        <div style={{ padding: '0.5rem' }}>
                {
                    !(target.slice(-4) === ".mp3" || target.slice(-4) === ".mp4" ) && 
                    <div>
                        <div
                            style={{
                                borderBottom: '1px solid rgba(0, 0, 0, .1)',
                                paddingBottom: '0.5rem',
                                marginBottom: '0.5rem',
                            }}
                        >
                            <h3>Are you sure that you want to follow this link?</h3>
                            <span style={{textDecoration: 'underline', color: 'teal' }}>{target}</span>
                        </div>
                        <div
                            style={{
                                alignItems: 'center',
                                display: 'flex',
                                justifyContent: 'end',
                            }}
                        >
                            <div style={{ marginRight: '0.25rem' }}>
                                <MinimalButton onClick={handleCancel}>No</MinimalButton>
                            </div>
                            <PrimaryButton onClick={handleConfirm}>Yes</PrimaryButton>
                        </div>
                    </div>
                }
            {
                (target.slice(-4) === ".mp3" || target.slice(-4) === ".mp4" ) && 
                    <div>
                        <h3>Media Player</h3>
                        <div
                            style={{
                                borderBottom: '1px solid rgba(0, 0, 0, .1)',
                                paddingBottom: '0.5rem',
                                marginBottom: '0.5rem',
                            }}
                        >
                            <video width="100%" controls>
                                <source src={target} type="video/mp4"/>
                            </video>
                        </div>
                        <div
                            style={{
                                alignItems: 'center',
                                display: 'flex',
                                justifyContent: 'end',
                            }}
                        >
                            <div style={{ marginRight: '0.25rem' }}>
                                <MinimalButton onClick={handleCancel}>Close</MinimalButton>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );

    React.useEffect(() => {
        store.subscribe('clickedTarget', handleTargetClicked);

        return () => {
            store.unsubscribe('clickedTarget', handleTargetClicked);
        };
    }, []);

    console.log(target);
    console.log(target.slice(-4));

    return (
        target && <Modal isOpened={true} closeOnClickOutside={false} closeOnEscape={false} content={renderContent} />
    );
};

export default ConfirmationModal;
