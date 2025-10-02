import React from 'react';

interface TranslationProgressProps {
    progress: number;
    status: 'pending' | 'processing' | 'completed' | 'failed';
}

const TranslationProgress: React.FC<TranslationProgressProps> = ({ progress, status }) => {
    const getStatusMessage = () => {
        switch (status) {
            case 'pending':
                return 'Translation queued...';
            case 'processing':
                return 'Processing...';
            case 'completed':
                return 'Translation completed!';
            case 'failed':
                return 'Translation failed';
            default:
                return 'Unknown status';
        }
    };

    const getStatusColor = () => {
        switch (status) {
            case 'pending':
                return '#ffa500';
            case 'processing':
                return '#007bff';
            case 'completed':
                return '#28a745';
            case 'failed':
                return '#dc3545';
            default:
                return '#6c757d';
        }
    };

    return (
        <div className="translation-progress">
            <div className="progress-header">
                <span className="progress-status" style={{ color: getStatusColor() }}>
                    {getStatusMessage()}
                </span>
                <span className="progress-percentage">{progress}%</span>
            </div>
            <div className="progress-bar">
                <div
                    className="progress-fill"
                    style={{
                        width: `${progress}%`,
                        backgroundColor: getStatusColor()
                    }}
                />
            </div>
        </div>
    );
};

export default TranslationProgress;