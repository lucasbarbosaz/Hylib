/* eslint-disable no-unreachable */
/* eslint-disable no-lone-blocks */
import GroupsData from "./GroupsData";

const Groups = ({ groups, config }) => {
    return (
        <>
            {
                groups.length >= 6 &&
                groups.map((groupsData, index) => {
                    return (
                        <GroupsData
                            groupsData={groupsData}
                            index={index}
                            config={config}
                        />
                    );
                })
            }
            {
                groups.length === 0 &&
                groups.map((groupsData, index) => {
                    return (
                        <GroupsData
                            groupsData={groupsData}
                            index={index}
                            config={config}
                        />
                    );
                })
            }
            {
                groups.length === 0 && (
                    <>
                        <div className="profile-group-display flex not-group"></div>
                        <div className="profile-group-display flex not-group"></div>
                        <div className="profile-group-display flex not-group"></div>
                        <div className="profile-group-display flex not-group"></div>
                        <div className="profile-group-display flex not-group"></div>
                        <div className="profile-group-display flex not-group"></div>
                    </>
                )
            }
            {
                groups.length === 1 &&
                groups.map((groupsData, index) => {
                    return (
                        <GroupsData
                            groupsData={groupsData}
                            index={index}
                            config={config}
                        />
                    );
                })
            }
            {
                groups.length === 1 && (
                    <>
                        <div className="profile-group-display flex not-group"></div>
                        <div className="profile-group-display flex not-group"></div>
                        <div className="profile-group-display flex not-group"></div>
                        <div className="profile-group-display flex not-group"></div>
                        <div className="profile-group-display flex not-group"></div>
                    </>
                )
            }
            {
                groups.length === 2 &&
                groups.map((groupsData, index) => {
                    return (
                        <GroupsData
                            groupsData={groupsData}
                            index={index}
                            config={config}
                        />
                    );
                })
            }
            {
                groups.length === 2 && (
                    <>
                        <div className="profile-group-display flex not-group"></div>
                        <div className="profile-group-display flex not-group"></div>
                        <div className="profile-group-display flex not-group"></div>
                        <div className="profile-group-display flex not-group"></div>
                    </>
                )
            }
            {
                groups.length === 3 &&
                groups.map((groupsData, index) => {
                    return (
                        <GroupsData
                            groupsData={groupsData}
                            index={index}
                            config={config}
                        />
                    );
                })
            }
            {
                groups.length === 3 && (
                    <>
                        <div className="profile-group-display flex not-group"></div>
                        <div className="profile-group-display flex not-group"></div>
                        <div className="profile-group-display flex not-group"></div>
                    </>
                )
            }

            {
                groups.length === 4 &&
                groups.map((groupsData, index) => {
                    return (
                        <GroupsData
                            groupsData={groupsData}
                            index={index}
                            config={config}
                        />
                    );
                })
            }
            {
                groups.length === 4 && (
                    <>
                        <div className="profile-group-display flex not-group"></div>
                        <div className="profile-group-display flex not-group"></div>
                    </>
                )
            }
            {
                groups.length === 5 &&
                groups.map((groupsData, index) => {
                    return (
                        <GroupsData
                            groupsData={groupsData}
                            index={index}
                            config={config}
                        />
                    );
                })
            }
            {
                groups.length === 5 && (
                    <>
                        <div className="profile-group-display flex not-group"></div>
                    </>
                )
            }
        </>
    )

}

export default Groups;